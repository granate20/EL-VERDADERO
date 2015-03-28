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
 
 
 function hayInternet() { 
 
 
var networkState; 

if (typeof (navigator.connection) != "undefined") {
networkState = navigator.connection.type; 
 
    var states = {}; 
    states[Connection.UNKNOWN]  = 'Unknown connection'; 
    states[Connection.ETHERNET] = 'Ethernet connection'; 
    states[Connection.WIFI]     = 'WiFi connection'; 
    states[Connection.CELL_2G]  = 'Cell 2G connection'; 
    states[Connection.CELL_3G]  = 'Cell 3G connection'; 
    states[Connection.CELL_4G]  = 'Cell 4G connection'; 
    states[Connection.CELL]     = 'Cell generic connection'; 
    states[Connection.NONE]     = 'No network connection'; 
	if(states[networkState]=='No network connection')
	return false;
	
	return true;
	

}

	//solo para los navegadores (prueba)
	return true;
	

} 
 
 
 
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		
		
        app.receivedEvent('deviceready');
		miAdmob();
		showAd(true);
		document.addEventListener("backbutton", onBackKeyDown, false);
		
		
		
		

	  
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


function preguntar()
{
	pregunta=$('#pregunta').val();
	var randomNumber = Math.random() >= 0.5;
if(randomNumber)
	$('#respuesta').html("<h2 style='background:#000'>"+pregunta+"</h2>"+'<img src="si.gif" />');	
	else
	$('#respuesta').html("<h2 style='background:#000'>"+pregunta+"</h2>"+'<img src="no.gif" />');	
	
	pregunta=$('#pregunta').val='';

	
}