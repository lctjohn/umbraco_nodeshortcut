// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function openContent(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
		var tab = chrome.tabs.query({'active': true}, function(tabs) {
			var contentid = document.getElementById("contentid").value.trim();
			chrome.tabs.update(tabs.id, {url: "javascript:openContent('" + contentid + "')"});
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	var input = document.getElementById("contentid");
	input.addEventListener('keyup', openContent, false);
	input.focus();
});
