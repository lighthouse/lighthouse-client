/*
 *  Copyright 2015 Caleb Brose, Chris Fogerty, Rob Sheehy, Zach Taylor, Nick Miller
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

describe('instanceService', function () {
    var http,
        configService,
        instanceService;

    beforeEach(function () {
        angular.mock.module('lighthouse.app');

        angular.mock.inject(function (_$httpBackend_, _configService_, _instanceService_) {
            http = _$httpBackend_;
            configService = _configService_;
            instanceService = _instanceService_;
        });
    });

    it('should list instances', function () {
        http.expect('GET',
            configService.api.base + 'beacons/list/beacon').respond('');

        var beacon = {
            address: 'beacon'
        };
        instanceService.getInstances(beacon);
        http.flush();
    });
});
