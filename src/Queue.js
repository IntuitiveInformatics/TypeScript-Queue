var Queue = /** @class */ (function () {
    //Initialize an empty Queue and empty LinkedList ready to receive messages
    function Queue() {
        this.head = null;
        this.tail = null;
        this.queue_length = null;
        this.current_size = 0;
        this.message_backlog = new CustomLinkedList();
    }
    //Compares the size or updated size to the queue_length that we specify to make sure that the list is full
    Queue.prototype.is_full = function (size) {
        if (size === void 0) { size = this.current_size; }
        return size >= this.queue_length;
    };
    //Remove all the messages that can be removed without dipping below the specified queue_length and add them
    //to the message_backlog
    Queue.prototype.trim = function () {
        console.log(this.current_size - this.head.message.length);
        while (this.is_full(this.current_size - this.head.message.length)) {
            this.current_size = this.current_size - this.head.message.length;
            this.message_backlog.add_first(this.head.message);
            this.head = this.head.next;
        }
    };
    //Given an integer, this gives the program an idea on how many words should be considered for the analysis
    //and dynamically size itself for this change
    Queue.prototype.set_queue_length = function (new_queue_length) {
        if (this.queue_length < new_queue_length) {
            console.log("Changed Queue Length Higher");
            this.queue_length = new_queue_length;
            this.add_older_messages();
        }
        else {
            console.log("Changed Queue Length Lower");
            this.queue_length = new_queue_length;
            this.trim();
        }
    };
    //Adds a message to the tail end of the linked list, and starts removing all of the older messages that it can
    //without going below the queue_length limit
    Queue.prototype.add_message = function (message) {
        this.current_size += message.length;
        if (this.head === null) {
            this.head = new CustomNode(message);
            this.tail = this.head;
        }
        else {
            this.tail.next = new CustomNode(message);
            this.tail = this.tail.next;
        }
        this.trim();
    };
    Queue.prototype.add_first = function (message) {
        this.head = new CustomNode(message, this.head);
        if (this.tail === null) {
            this.tail = this.head;
        }
    };
    //Go into the linked list, and grab the newest message (contained within the head) and add it to the Queue as the
    //new Head (Since head is the oldest message of the queue)
    Queue.prototype.add_older_messages = function () {
        var words_left = this.queue_length - this.current_size;
        while (words_left > 0 && this.message_backlog.current_size != 0) {
            this.add_first(this.message_backlog.pop());
            words_left -= this.head.message.length;
            this.current_size += this.head.message.length;
        }
    };
    Queue.prototype.print = function () {
        console.log("Queue:");
        if (this.head !== null) {
            var tmp = this.head;
            var i = 0;
            while (tmp !== null) {
                console.log(i + ": " + tmp.message);
                tmp = tmp.next;
                ++i;
            }
        }
        console.log("Message Backlog:");
        console.log(this.message_backlog.print());
    };
    return Queue;
}());
