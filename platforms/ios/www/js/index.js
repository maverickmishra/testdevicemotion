/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        if (window.webkit) {
            console.log('wk');
        }
        window.addEventListener("deviceorientation", function(event) {
            // process event.alpha, event.beta and event.gamma
            document.getElementById('beta').innerHTML = Math.round(event.beta);
            document.getElementById('gamma').innerHTML = Math.round(event.gamma);
            document.getElementById('alpha').innerHTML = Math.round(event.alpha);

        }, true);
        window.addEventListener('devicemotion', function(event) {
            document.getElementById('acceleration-x').innerHTML = Math.round(event.acceleration.x);
            document.getElementById('acceleration-y').innerHTML = Math.round(event.acceleration.y);
            document.getElementById('acceleration-z').innerHTML = Math.round(event.acceleration.z);

            document.getElementById('acceleration-including-gravity-x').innerHTML =
                Math.round(event.accelerationIncludingGravity.x);
            document.getElementById('acceleration-including-gravity-y').innerHTML =
                Math.round(event.accelerationIncludingGravity.y);
            document.getElementById('acceleration-including-gravity-z').innerHTML =
                Math.round(event.accelerationIncludingGravity.z);

            document.getElementById('rotation-rate-beta').innerHTML = Math.round(event.rotationRate.beta);
            document.getElementById('rotation-rate-gamma').innerHTML = Math.round(event.rotationRate.gamma);
            document.getElementById('rotation-rate-alpha').innerHTML = Math.round(event.rotationRate.alpha);

            document.getElementById('interval').innerHTML = event.interval;

        }, true);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
