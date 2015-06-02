var https = require('https');
var q = require('q');
module.exports = {
  fetch_likes: function(access_token) {
    var deferred = q.defer();
    https.get({
        host: 'graph.facebook.com',
        path: '/v2.3/me?feilds=likes&access_token='+access_token
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            deferred.resolve(body.toString());
        });
    });
    return deferred.promise;
  },
  fetch_friends: function(access_token) {
    var deferred = q.defer();
    https.get({
        host: 'graph.facebook.com',
        path: '/v2.3/me?feilds=friends{id,name,picture{height,url,width}}&access_token='+access_token
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            deferred.resolve(body.toString());
        });
    });
    return deferred.promise;
  },
  post_to_fb: function(access_token, link, message, picture, description) {
    var deferred = q.defer();
    https.get({
        host: 'graph.facebook.com',
        path: '/v2.3/me/feed?message=hello+this+is+testing&access_token='+access_token+'&link='+link+'&description='+description+'&picture='+picture
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            deferred.resolve(body.toString());
        });
    });
    return deferred.promise;
  }
};