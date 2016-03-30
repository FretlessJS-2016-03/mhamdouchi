(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .config(notesConfig);
  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider
    .state('notes', {
      url: '/notes',
      templateUrl: '/notes/notes.html',
      controller: NotesController
    })
    .state('notes.form', {
      url: '/:noteId',
      templateUrl: '/notes/notes-form.html'
    });
  }
  NotesController.$inject = ['$state', '$scope', 'NotesService'];
  function NotesController($state, $scope, NotesService) {
    NotesService.fetch().then(function() {
      $scope.notes = NotesService.getNotes();
    });
    $state.go('notes.form');
    $scope.note = {
      title: 'Static note',
      body_html: 'Something something something.'
    };
    $scope.addNote = function(){
      console.log($scope.note.title);
      // db.notes.insert({title:note.title, body_html:note.body_html});
    };
  }
}());
