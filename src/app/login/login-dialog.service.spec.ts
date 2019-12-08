import { TestBed, inject } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { LoginDialogService } from './login-dialog.service';
import { of } from 'rxjs/internal/observable/of';

describe('LoginDialogService', () => {
    let loginDialogService: LoginDialogService;
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });

    dialogRefSpyObj.componentInstance = { body: '' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ MatDialogModule ],
            providers: [ LoginDialogService ]
        });
        loginDialogService = TestBed.get(LoginDialogService);
    });

    beforeEach(() => {
        dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    });

    it('LoginDialogService should be created', inject([LoginDialogService], (service: LoginDialogService) => {
      expect(service).toBeTruthy();
    }));

    it('LoginDialogService should open the LoginComponent ', () => {
        loginDialogService.openLoginDialog();
        expect(dialogSpy).toHaveBeenCalled();
    });

    it('LoginDialogService should close the LoginComponent ', () => {
        loginDialogService.openLoginDialog();
        expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
    });

});
