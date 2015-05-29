(function() {
  angular
    .module('qcs')
    .value('api', {
      baseUrl: 'http://saas.logicsolutions.com.cn/facts_2020-1.0/rest/',
      user: 'user/'
    })
})();