package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
	"time"
)

/*
 * Complete the 'ModuloFibonacciSequence' function below.
 *
 * The function accepts following parameters:
 *  1. chan bool requestChan
 *  2. chan int resultChan
 */

const modulo = 1000000000 // 10^9 as specified

func ModuloFibonacciSequence(requestChan chan bool, resultChan chan int) {
    var fib [2]int64 = [2]int64{1, 2} // Initial Fibonacci values fib[1] = 1, fib[2] = 2

    // Rate limit control
    rateLimit := time.Tick(10 * time.Millisecond)

    for {
        _, ok := <-requestChan
        if !ok { // If channel is closed, stop the goroutine
            close(resultChan)
            return
        }

        // Wait for rate limit tick before continuing
        <-rateLimit

        // Send the next Fibonacci number modulo 10^9
        resultChan <- int(fib[0] % modulo)

        // Calculate the next number in the sequence
        nextFib := (fib[0] + fib[1]) % modulo
        fib[0], fib[1] = fib[1], nextFib
    }
}
func main() {
    reader := bufio.NewReaderSize(os.Stdin, 16 * 1024 * 1024)

    skipTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
    checkError(err)
    skip := int32(skipTemp)

    totalTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
    checkError(err)
    total := int32(totalTemp)

    resultChan := make(chan int)
    requestChan := make(chan bool)
    go ModuloFibonacciSequence(requestChan, resultChan)
    for i := int32(0); i < skip + total; i++ {
        start := time.Now().UnixNano()
        requestChan <- true
        new := <-resultChan
        if i < skip {
            continue
        }
        end := time.Now().UnixNano()
        timeDiff := (end - start)/1000000
        if timeDiff < 3 {
            fmt.Println("Rate is too high")
            break
        }
        fmt.Println(new)
    }
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}