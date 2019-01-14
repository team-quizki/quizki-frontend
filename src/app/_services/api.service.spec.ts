import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';
import { environment } from './../../environments/environment';

describe('ApiService', () => {

  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const testFakeUrl = '/api/testFakeUrl';
  const testBaseFakeUrl = environment.apiUrl + testFakeUrl;
  const testUsername = 'username';
  const testPassword = 'password';
  const testFakeData = {name: 'Test Fake Data'};

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

  it('#api.getHttpHeaders should be defined ', () => {
    expect(service.getHttpHeaders()).toBeDefined();
  });

  it('#api.getHttpHeadersWithBase64Authorization should be defined ', () => {
    expect(service.getHttpHeadersWithBase64Authorization(testUsername, testPassword)).toBeDefined();
  });

  it('#api.get should be defined ', () => {
    expect(service.get(testFakeUrl, testUsername, testPassword)).toBeDefined();
  });

  it('#api.get can test HttpClient.get', () => {
  //  const testFakeData = {name: 'Test Fake Data'};
    const testHeader = service.getHttpHeadersWithBase64Authorization(testUsername, testPassword);
    // Make an HTTP GET request
    httpClient.get<any>(testBaseFakeUrl, testHeader)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testFakeData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testFakeData);
  });

  it('#api.get can test for 404 error', () => {
    const errorMessage = 'deliberate 404 error';
    const testHeader = service.getHttpHeadersWithBase64Authorization(testUsername, testPassword);

    httpClient.get<any>(testBaseFakeUrl, testHeader).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(errorMessage, 'message');
      }
    );

    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Respond with mock error
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });

  it('#api.get can test for network error', () => {
    const errorMessage = 'simulated network error';
    const testHeader = service.getHttpHeadersWithBase64Authorization(testUsername, testPassword);

    httpClient.get<any>(testBaseFakeUrl, testHeader).subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(errorMessage, 'message');
      }
    );

    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: errorMessage,
    });

    // Respond with mock error
    req.error(mockError);
  });

  it('#api.post should be defined ', () => {
    const testPostHeader = service.getHttpHeaders();
    expect(httpClient.post(testFakeUrl, testFakeData, testPostHeader)).toBeDefined();
  });

  it('#api.post can test HttpClient.post', () => {
    const testPostHeader = service.getHttpHeaders();

    // Make an HTTP POST request
    httpClient.post<any>(testBaseFakeUrl, testFakeData, testPostHeader)
      .subscribe((res) => {
        expect(res).toEqual(testFakeData);
      });

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('POST');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testFakeData);
  });

  it('#api.post can test for 404 error', () => {
    const errorMessage = 'deliberate 404 error';
    const testPostHeader = service.getHttpHeaders();

    httpClient.post<any>(testBaseFakeUrl, testFakeData, testPostHeader).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(errorMessage, 'message');
      }
    );

    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Respond with mock error
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });

  it('#api.post can test for network error', () => {
    const errorMessage = 'simulated network error';
    const testPostHeader = service.getHttpHeaders();

    httpClient.post<any>(testBaseFakeUrl, testFakeData, testPostHeader).subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(errorMessage, 'message');
      }
    );

    const req = httpTestingController.expectOne(testBaseFakeUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: errorMessage,
    });

    // Respond with mock error
    req.error(mockError);
  });

  it('#api.service should be created', () => {
    expect(service).toBeTruthy();
  });
});
