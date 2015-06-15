(function() {
  'use strict';

  angular
    .module('qcs')
    .factory('UserService', UserService);

    UserService.$inject = ['$http', 'api'];
    function UserService($http, api) {
      var config = {
        headers: {
         'Content-Type': 'application/json'
        }
      }

      function handlingQuery(searchKeys) {
        if (jQuery.isEmptyObject(searchKeys)) {
          return [{
            connection: 'and',
            key: 'login_id',
            condition: 'like',
            value: '',
            isValueADigital: false
          }];
        } else {
          var queryCriterias = [];
          angular.forEach(searchKeys, function(value, key){
            if (value !== null) {
              if (jQuery.type(value) === 'string') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: 'like',
                    value: value,
                    isValueADigital: false
                  }
                );
              } else if (jQuery.type(value) === 'boolean') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: '=',
                    value: Boolean(value),
                    isValueADigital: true
                  }
                );
              } else if (jQuery.type(value) === 'object') {
                queryCriterias.push(
                  {
                    connection: 'and',
                    key: key,
                    condition: 'like',
                    value: value.name,
                    isValueADigital: false
                  }
                );
              } else if (jQuery.type(value) === 'array') {
                for (var i = 0; i < value.length; i++) {
                  queryCriterias.push(
                    {
                      connection: 'and',
                      key: key,
                      condition: 'like',
                      value: value[i],
                      isValueADigital: false
                    }
                  );
                }
              }
            }
          });
          return queryCriterias;
        }
      }

      function assembleUserOptions(option) {
        console.log('queryCriterias', handlingQuery(option.search));
        return {
          pagingTool: {
            currentPage: option.pagination.current || 1,
            pageSize: option.pagination.perPage || 10
          },
          queryCriterias: handlingQuery(option.search),
          queryOrderBies: [
            {
              columnName: option.orderBy.name || 'login_id',
              orderType: option.orderBy.type ? 'asc' : 'desc'
            }
          ]
        };
      }

      return {
        getUsers: function(queryOption) {
          // Get local data
          // return $http.get('../../../assets/data/users.json');
          return $http.post(api.user + 'list', assembleUserOptions(queryOption));
        },

        getUser: function(id) {
          return $http.get(api.user + id);
        },

        addUser: function(user) {
          return $http.post(api.user, user, config);
        },

        updateUser: function(user) {
          return $http.put(api.user, user, config);
        },

        deleteUser: function(id) {
          return $http.delete(api.user + id);
        }
      }
    }
})();