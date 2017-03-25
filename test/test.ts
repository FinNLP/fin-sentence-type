/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as Fin from "finnlp";
import "../src/index";

function fail (msg:string){
	console.error(`\t ❌ Fail: ${msg}`);
	process.exit(1);
}

function pass (msg:string) {
	console.log(`\t ✔ Passed: ${msg}`);
}

function assert (sentence:string,expectedTypes:string) {
	const inst = new Fin.Run(sentence);
	const types = inst.sentenceType()[0];
	expectedTypes.split(",").forEach((expected)=>{
		const found = types.find(x=>x.type === expected);
		if(found) pass(`sentence "${sentence}" has the type "${expected}"`);
		else fail(`sentence "${sentence}" doesn't have the type ${expected}`);
	});
}

assert("who wrote this book","interrogative");
assert("when","interrogative");
assert("could it be him","interrogative");
assert("it was awesome wasn't it","interrogative");
assert("what?","interrogative");
assert("how","interrogative");
assert("should I open the window","interrogative");
assert("have you been there","interrogative");
assert("was it that good","interrogative");
assert("wow, it was awesome","exclamatory");
assert("that's fine by me","declarative");
assert("did you know that","interrogative");
assert("which book are you reading","interrogative");
assert("I was walking in the street","declarative");
assert("do the dishes!","imperative");
assert("danny did the dishes!","exclamatory");
assert("oh I didn't know that","exclamatory");
assert("ugh I didn't know that","exclamatory");
assert("wow I didn't know that","exclamatory");
assert("will you open the door for me","imperative,interrogative");
assert("would you open the door for me","imperative,interrogative");
assert("can you open the door for me","imperative,interrogative");
assert("could you open the door for me","imperative,interrogative");
assert("have a shower","imperative");
assert("send the email","imperative");
assert("which book did you read","interrogative");
assert("how was the book you read","interrogative");
assert("what is this","interrogative");
assert("whose hat is this","interrogative");
assert("how did it go","interrogative");
assert("where are you going","interrogative");
assert("is it that good","interrogative");
assert("am I too early","interrogative");
assert("can you confirm that you're a site admin","imperative");
assert("when did that happen?","interrogative");
assert("let's go to the other room","imperative");
assert("that's alright","declarative");
assert("go right after him","imperative");
assert("be a good kid","imperative");
assert("go home you're drunk","imperative");
assert("That was really unexpected","declarative");
assert("how did that happen","interrogative");