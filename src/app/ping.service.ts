import {inject, Injectable, makeStateKey, PLATFORM_ID, TransferState} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {isPlatformServer} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class PingService {
  private _platformId = inject(PLATFORM_ID)
  private _transferState = inject(TransferState)
  private _failureKey = makeStateKey<boolean>("failure")

  constructor(
    private _http: HttpClient
  ) { }

  isDown(): null | boolean {
    if (isPlatformServer(this._platformId)) {
      this._http.get<any>("https://rynkix.com")
        .subscribe({
          next: res => {
            this._transferState.set(this._failureKey, res.status == 0)
          },
          error: err => {
            this._transferState.set(this._failureKey, err.status == 0)
          }
        })

      return null
    } else {
      return this._transferState.get(this._failureKey, true);
    }
  }
}
