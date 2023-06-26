// Connect to the WebSocket server.
const socket = new WebSocket('wss://echo.websocket.org');

// Connection opened.
socket.addEventListener('open', (event) => {
    console.log('Connected to the WebSocket server');
});

class User {
    static nextId = 1;
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.lastActive = new Date();
    }

    // Getter methods
    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getLastActive() {
        return this.lastActive;
    }

    // Setter methods
    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    // Method to update the last active date
    updateLastActive() {
        this.lastActive = new Date();
    }
}

class Message {
    static nextId = 1;
    constructor(id, sender, content, type, timestamp = new Date(), isRead = false, replyTo = null, attachments = []) {
        this.id = Message.nextId++;
        this.sender = User.username;
        this.content = content;
        this.type = type;
        this.timestamp = timestamp;
        this.isRead = isRead;
        this.replyTo = replyTo;
        this.attachments = attachments;
    }

    // Getters for properties
    getId() {
        return this.id;
    }

    getSender() {
        return this.sender;
    }

    getContent() {
        return this.content;
    }

    getType() {
        return this.type;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getIsRead() {
        return this.isRead;
    }

    getReplyTo() {
        return this.replyTo;
    }

    getAttachments() {
        return this.attachments;
    }

    // Setters for properties
    setRead() {
        this.isRead = true;
    }

    addAttachment(attachment) {
        this.attachments.push(attachment);
    }

    removeAttachment(attachment) {
        const index = this.attachments.indexOf(attachment);
        if (index > -1) {
            this.attachments.splice(index, 1);
        }
    }

    // Method to display the message
    display() {
        return `${this.timestamp.toISOString()} - ${this.sender}: ${this.content}`;
    }
}


