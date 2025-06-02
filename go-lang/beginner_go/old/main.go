package main

import {
	"fmt"
}

type Person struct {
	Name string
	Age  int
}

func main() {
	person := Person{
		Name: "John",
		Age:  31,
	}

	fmt.Printf("%+v\n", person)

	// employee := Person{ Name: "John"}
	fmt.Printf("%v\n", &person)
	fmt.Println("Address of person:", &person.Name)
	personPtr := &person.Name
	fmt.Println("Value using pointer:", *personPtr)
	modifyPersonName(&person, "Bob")
	fmt.Printf("final name %v\n", person.Name)
}

func modifyPersonName(p *Person, name string) {
	p.Name = name
	fmt.Println("name: ", p)
}
