if (msg == "#die")
  {
    clearStream(user)
    clearRoomListener(user)
    const targetRoomId = "badend"
    const targetDoorId = "rip"
    currentRoom = rooms[targetRoomId]

    stopChessGame(roomStates, user)
    userRoomEmit(user, user.areaId, user.roomId,
                 "server-user-left-room", user.id)
    socket.leave(user.areaId + user.roomId)
    const door = rooms[targetRoomId].doors[targetDoorId]

    user.position = { x: door.x, y: door.y }
    if (door.direction !== null) user.direction = door.direction
    user.roomId = targetRoomId
    setUserAsActive(user)
    user.lastRoomMessage = "";
    
    sendCurrentRoomState()

    socket.join(user.areaId + targetRoomId)
    sendNewUserInfo()
    return
}
