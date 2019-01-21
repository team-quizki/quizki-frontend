import { TestBed, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';
import { environment } from './../../environments/environment';

import { Role, User } from './../user/user';

const baseUrl = environment.apiUrl;
const testUsername = 'mouse';
const testPassword = 'password';

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

  it('tests apiService.get()',
    // Verify that a call to apiService.get() will load the apiUrl
    // we give it, and will return the correct data to whatever
    // code called the apiService.get()

    inject([HttpTestingController, ApiService],
      (httpMock: HttpTestingController, service: ApiService) => {
        const url = '/api/verifyCredentials';

        service.get(url, testUsername, testPassword).subscribe((data: User) => {
          expect(data).toBeDefined();
          expect(data.id).toEqual(10);
          expect(data.role.id).toEqual(2);
          expect(data.role.name).toEqual('QUIZKI_USER_ROLE_USER');
          expect(data.password).toBeNull();
          expect(data.name).toEqual('mouse');
          expect(data.enabled).toEqual(1);
          expect(data.email).toEqual('mouse@fakeMice.com');
          expect(data.fullname).toEqual('Toy Mouse');
          expect(data.demographic).toEqual('independent');
        });

        const req = httpMock.expectOne(baseUrl + url);
        expect(req.request.method).toEqual('GET');

        req.flush( {data: {'id': 10, 'role': {'id': 2, 'name': 'QUIZKI_USER_ROLE_USER'},
          'password': '', 'name': 'mouse', 'enabled': 1, 'email': 'mouse@fakeMice.com',
          'fullname': 'Toy Mouse', 'demographic': 'independent'
         }});
      })
  );

  afterEach(
    inject([HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      })
  );

});
