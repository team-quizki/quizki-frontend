import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';
import { environment } from './../../environments/environment';

const baseUrl = environment.apiUrl;
const testUrl = '/api/mouseUrl';
const testUsername = 'tiny_mouse';
const testPassword = 'rodent';

describe('ApiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });

  });

  it('should be created',
    inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('tests apiService.get() for successful get',
    // Verify that a call to apiService.get() will load the apiUrl
    // we give it, and will return the correct data to whatever
    // code called the apiService.get()

    inject([HttpTestingController, ApiService],
      (httpMock: HttpTestingController, service: ApiService) => {
        service.get(testUrl, testUsername, testPassword).subscribe((data: any) => {
          expect(data).toBeDefined();
          expect(data.id).toEqual(10);
          expect(data.role.id).toEqual(3);
          expect(data.role.name).toEqual('PEST');
          expect(data.password).toBeNull();
          expect(data.fullname).toEqual('Tiny Mouse');
          expect(data.mouseArray).toEqual([ 'Snake Food', 'Cat Toy', 'Mouse Trap' ]);
        });

        const req = httpMock.expectOne(baseUrl + testUrl);
        expect(req.request.method).toEqual('GET');

        req.flush({'id': 10, 'role': {'id': 3, 'name': 'PEST' }, 'password': null,
          'fullname': 'Tiny Mouse', 'mouseArray': [ 'Snake Food', 'Cat Toy', 'Mouse Trap' ]
         });
      })
  );

  it('tests apiService.get() for failure with deliberate 401 error', () => {
    const emsg = 'deliberate 401 error';

    inject([ HttpTestingController, ApiService ],
      ( httpMock: HttpTestingController, service: ApiService ) => {

      service.get(testUrl, testUsername, testPassword ).subscribe(
        () => fail('should have failed with the 401 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(401, 'status');
          expect(error.error).toEqual(emsg, 'message');
        }
      );

      const req = httpMock.expectOne(testUrl);

      // Respond with mock error
      req.flush(emsg, { status: 401, statusText: 'Bad credentials' });
    });
  });


  it('tests apiService.post(url, data) for successful post',
    // Verify that a call to apiService.post() will load the apiUrl
    // we give it, and will return the correct data to whatever
    // code called the apiService.post().Yet, by convention the
    // apiService.post(url, data) is only used to check for unique email
    // and username returning true/false and to create users.
    // All other apiService.post() would require username and password.
    // The apiService.post(url, data, username, password) has
    // not yet been written

    inject([HttpTestingController, ApiService],
      (httpMock: HttpTestingController, service: ApiService) => {
        const postedData = JSON.stringify({ 'foo': '1Foo', 'bar': '2Bar', 'bah': '3Bah' });
        const returnedResult = JSON.stringify( true );

        service.post( testUrl, postedData ).subscribe((data: any) => {
          expect(data).toBeDefined();
          expect(data).toEqual(returnedResult);
        });

        const req = httpMock.expectOne(baseUrl + testUrl);
        expect(req.request.method).toEqual('POST');

        req.flush(returnedResult);
      })
  );


  it('tests apiService.post() for failure with deliberate 401 error', () => {
    // test simple post for a deliberate client HttpErrorResponse

    const emsg = 'deliberate 401 error';
    const mouseData = JSON.stringify({'foo': 'foo', 'bar': 'bar'});

    inject([ HttpTestingController, ApiService ],
      ( httpMock: HttpTestingController, service: ApiService ) => {

      service.post(testUrl, mouseData ).subscribe(
        data => fail('should have failed with the 401 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(401, 'status');
          expect(error.error).toEqual(emsg, 'message');
        }
      );

      const req = httpMock.expectOne(testUrl);

      // Respond with mock error
      req.flush(emsg, { status: 401, statusText: 'Bad credentials' });
    });
  });

  afterEach(
    inject([HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      })
  );

});
