(function(){
  function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.messages = null;
      this.newMessage = {
        content: null,
        roomId: null,
        sentAt: null,
        username: null
      }


  this.open = function(){
    var modalInstance = $uibModal.open({
      animation:true,
      templateUrl: '/templates/modal.html',
      controller: 'ModalCtrl as modal',
      windowClass: 'modal-window'
    });
  };

    this.setCurrentRoom = function(room){
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    };

  this.sendMessage = function (newMessage){
    this.newMessage.roomId = this.currentRoom.$id;
    this.newMessage.username = this.currentUser;
    this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
    console.log(this.currentUser);
    console.log(this.currentRoom.$id);
    Message.send(this.newMessage);
  };


}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
