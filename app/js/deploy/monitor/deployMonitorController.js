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

var _ = require('lodash');

function deployMonitorController($scope, $timeout, actions, flux, deployError, deployModel) {
    'use strict';

    // init
    $scope.state = deployModel.state();
    $scope.inProgress = deployModel.inProgress();
    $scope.completed = deployModel.completed();
    $scope.request = deployModel.request();
    $scope.errors = [];

    // state updates
    $scope.$listenTo(deployModel, function () {
        $scope.state = deployModel.state();
        $scope.inProgress = deployModel.inProgress();
        $scope.completed = deployModel.completed();
        $scope.request = deployModel.request();

        if ($scope.state.started && !$scope.state.good) {
            $scope.errors.push(deployError.display($scope.state.errorMessage));
        }

        $timeout(function () { 
            $scope.$apply();
        }, 0);
    });

    $scope.streamLog = function () {
        return _.map(deployModel.log(), function (log) {
            return JSON.stringify(log);
        }).join('\r\n');
    };

    $scope.reset = function () {
        flux.dispatch(actions.deployStreamReset);
        $scope.errors = [];
    };
}

deployMonitorController.$inject = ['$scope', '$timeout', 'actions', 'flux', 'deployError', 'deployModel'];
module.exports = deployMonitorController;