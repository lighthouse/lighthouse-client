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

// instances/init.js
// Handles discovery and display of Docker host instances

var containerController = require('./containerController'),
    createContainerController = require('./createContainerController'),
    addImageController = require('./addImageController'),
    instanceDetailController = require('./instanceDetailController'),
    instanceModel = require('./instanceModel');

// init angular module
var instances = angular.module('lighthouse.instances', []);

// register module components
instances.controller('containerController', containerController);
instances.controller('createContainerController', createContainerController);
instances.controller('addImageController', addImageController);
instances.controller('instanceDetailController', instanceDetailController);
instances.store('instanceModel', instanceModel);

module.exports = instances;
