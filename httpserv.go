package main

import (
	"net/http"
	"io"
	"fmt"
)

var info string

func Handler(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS")
	w.Header().Add("Access-Control-Allow-Headers", "content-type")
	w.Header().Add("Access-Control-Allow-Origin","*")
	if req.Method == "POST" {
		data, err := io.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {return }
		fmt.Printf("%s\n", data)
		info = string(data)
		io.WriteString(w, "successful post")
	} else if req.Method == "OPTIONS" {
		w.WriteHeader(204)
	} else if req.Method == "PUT" {
		data, err := io.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {return }
		fmt.Printf("%s\n", data)
		info = string(data)
		io.WriteString(w, "successful put")
	} else if req.Method == "GET" {
		str := fmt.Sprintf("successful get: %s", info)
		io.WriteString(w, str)
	} else if req.Method == "DELETE" {
		info = ""
		io.WriteString(w, "successful delete")
	} else {
		w.WriteHeader(405)
	}
}

func main() {
	http.HandleFunc("/", Handler)
	
	err := http.ListenAndServe(":8080", nil)
	panic(err)
}
