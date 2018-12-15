import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {

  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('#getHttpHeaders should return httpHeaders json object ', () => {
    expect(service.getHttpHeaders()).toBeDefined();
  });

  it('#getHttpHeadersWithBase64Authorization should return httpHeaders json object ', () => {
    const paramUsername = 'username';
    const paramPassword = 'password';
    expect(service.getHttpHeadersWithBase64Authorization(paramUsername, paramPassword)).toBeDefined();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
