var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.geo.photosForLocation', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.photosForLocation({ lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.photos.geo.photosForLocation({ api_key: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.photos.geo.photosForLocation({ api_key: '_', lat: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.photosForLocation({ api_key: '_', lat: '_', lon: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});