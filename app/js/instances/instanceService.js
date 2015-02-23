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

/*
 * instanceService
 * Requests and manages information related to instance discovery.
 */
function instanceService($http, actions, flux, configService) {
    'use strict';

    function getInstances() {
        var request = [configService.api.base, 'provider/', 'vms'].join('');
        $http.get(request).then(
            // success
            function (response) {
                flux.dispatch(actions.listInstances, {'response': response.data});
            },
            // error
            function (response) {
                // TODO flux.dispatch(actions.error, ...);
                console.log('instanceService.getInstances() error: ' + response);
            }
        );
    }

    return {
        'getInstances': getInstances
    };
}

instanceService.$inject = ['$http', 'actions', 'flux', 'configService'];
module.exports = instanceService;
