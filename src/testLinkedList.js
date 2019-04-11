var list = new CustomLinkedList();
list.add_first(["Hey", "there", ",", "my", "name", "is", "Joe"]);
console.log(list.head);
list.add_first(["No", "I", "do", "not", "know", "what's", "wrong"]);
console.log(list.head);
list.add_first(["Thank", "you", "for", "your", "time!"]);
console.log(list.current_size);
console.log(list.print());
console.log(list.pop());
console.log(list.print());
console.log(list.current_size);
list.remove();
console.log(list.print());
console.log(list.current_size);
console.log(list.pop());
console.log(list.current_size);
console.log("\n \nTesting Queues Now!");
var queue = new Queue();
queue.set_queue_length(14);
queue.add_message(["1", "Hey", "there", ",", "my", "name", "is", "Joe"]);
queue.print();
queue.add_message(["2", "No", "I", "do", "not", "know", "what's", "wrong"]);
queue.print();
queue.add_message(["3", "Thank", "you", "for", "your", "time!"]);
queue.print();
queue.add_message(["4", "I", "Honestly", "Really", "Appreciate", "The", "Amount", "Of", "Care", "That", "You", "Put"]);
queue.print();
//Expect that will move the head of the linked list to the head of the queue
queue.set_queue_length(17);
queue.print();
//Expect that it will move the first message from the queue to the first message of the linked list
queue.set_queue_length(15);
queue.print();
//Expect only newest message to be in the Queue
queue.set_queue_length(2);
queue.print();
//Testing the hypothesis above
queue.add_message(["5", "New", "Message", "Here"]);
queue.print();
//Expect that 2 messages will be in the Message Backlog
queue.set_queue_length(18);
queue.print();
queue.set_queue_length(200);
queue.print();
