class Queue {

    //Length of words that we want analyzed
    queue_length: number
    //Current length of the queue
    current_size: number
    //Head of the list, the OLDEST message - CONTAINS DATA
    head: CustomNode
    //Tail of the list, the NEWEST message - CONTAINS DATA
    tail: CustomNode
    //Holds all of the extra messages that we aren't analyzing - HEAD IS NEWEST MESSAGE NOT ANALYZED
    message_backlog: CustomLinkedList

    //Initialize an empty Queue and empty LinkedList ready to receive messages
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.queue_length = null;
        this.current_size = 0;
        this.message_backlog = new CustomLinkedList();
    }

    //Compares the size or updated size to the queue_length that we specify to make sure that the list is full
    is_full(size:number = this.current_size): boolean
    {
        return size >= this.queue_length;
    }

    //Remove all the messages that can be removed without dipping below the specified queue_length and add them
    //to the message_backlog
    trim()
    {
        console.log(this.current_size-this.head.message.length)
        while (this.is_full(this.current_size-this.head.message.length))
        {
                this.current_size = this.current_size-this.head.message.length;
                this.message_backlog.add_first(this.head.message)
                this.head = this.head.next;
        }
    }

    //Given an integer, this gives the program an idea on how many words should be considered for the analysis
    //and dynamically size itself for this change
    set_queue_length(new_queue_length: number): void
    {
        if(this.queue_length < new_queue_length)
        {
            console.log("Changed Queue Length Higher")
            this.queue_length = new_queue_length;
            this.add_older_messages();
        } else
        {
            console.log("Changed Queue Length Lower")
            this.queue_length = new_queue_length;
            this.trim();
        }


    }

    //Adds a message to the tail end of the linked list, and starts removing all of the older messages that it can
    //without going below the queue_length limit
    add_message(message:string[]): void
    {
        this.current_size += message.length;
        if(this.head === null)
        {
            this.head = new CustomNode(message);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new CustomNode(message);
            this.tail = this.tail.next;
        }
        this.trim()
    }

    add_first(message:string[]): void
    {

        this.head = new CustomNode(message, this.head);
        if (this.tail === null)
        {
            this.tail = this.head;
        }
    }

    //Go into the linked list, and grab the newest message (contained within the head) and add it to the Queue as the
    //new Head (Since head is the oldest message of the queue)
    add_older_messages() :void
    {
        var words_left = this.queue_length - this.current_size;
        while (words_left > 0 && this.message_backlog.current_size != 0)
        {
            this.add_first(this.message_backlog.pop());
            words_left -= this.head.message.length;
            this.current_size += this.head.message.length;
        }
    }

    print()
    {
        console.log("Queue:")
        if(this.head !== null)
        {
            var tmp = this.head;
            var i = 0;
            while (tmp !== null)
            {
                console.log(i + ": " + tmp.message);
                tmp = tmp.next;
                ++i;
            }
        }

        console.log("Message Backlog:");
        console.log(this.message_backlog.print());
    }
}