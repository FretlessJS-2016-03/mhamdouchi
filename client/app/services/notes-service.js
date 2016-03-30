(function() {
  angular.module('notely')
  .service('NotesService', NotesService);
  NotesService.$inject = ['$http'];
  function NotesService($http) {
    var _this = this;
    _this.notes = [];
    _this.fetch = function() {
      var promise = $http.get('http://localhost:3030');
      return promise.then(
        function(response) {
          _this.notes = response.data;
        },
        function(response) {
          console.log('Snap: ' + response);
        }
      );
    };
    _this.getNotes = function() {
      return _this.notes;
    };
  }
}());
