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
 * deployMonitorDirective
 * UI component to monitor a deploy stream.
 */
function deployMonitorDirective() {
    'use strict';

    function link(scope, element, attrs) {
        var selector = $('[data-toggle="tooltip"]');

        // Initialize tooltip functionality for stream logs
        $(function () {
            selector.tooltip();
        });

        // Collapse
        scope.showLog = false;

        $('#streamLog').on('show.bs.collapse', function () {
            scope.showLog = true;
            scope.$apply();
        });

        $('#streamLog').on('hide.bs.collapse', function () {
            scope.showLog = false;
            scope.$apply();
        });

        // Cleanup
        element.on('$destroy', function () {
            selector.tooltip('destroy');
        });
    }

    return {
        'controller': 'deployMonitorController',
        'link': link,
        'restrict': 'A',
        'scope': {},
        'template': require('../templates/deploy_monitor.html')
    };
}

module.exports = deployMonitorDirective;