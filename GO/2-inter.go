package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

/*
 * Complete the 'customSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY strArr as parameter.
 */

func customSorting(strArr []string) []string {
    for i := 1; i < len(strArr); i++ {
        key := strArr[i]
        j := i - 1

        // Insert strArr[i] into the sorted sequence strArr[0..i-1]
        for j >= 0 && shouldSwap(strArr[j], key) {
            strArr[j+1] = strArr[j]
            j = j - 1
        }
        strArr[j+1] = key
    }
    return strArr
}

// shouldSwap returns true if a should be placed before b according to the custom rules
func shouldSwap(a, b string) bool {
    lenA, lenB := len(a), len(b)
    oddA, oddB := lenA%2 != 0, lenB%2 != 0

    // If one is odd and the other is even, the odd one should come first
    if oddA && !oddB {
        return false
    } else if !oddA && oddB {
        return true
    }

    // If both are odd or both are even
    if oddA && oddB {
        // If both have odd lengths, the shorter should come first
        if lenA != lenB {
            return lenA > lenB
        }
        // If both have the same length, sort alphabetically
        return a > b
    } else {
        // If both have even lengths, the longer should come first
        if lenA != lenB {
            return lenA < lenB
        }
        // If both have the same length, sort alphabetically
        return a > b
    }
}
func main() {
    reader := bufio.NewReaderSize(os.Stdin, 16 * 1024 * 1024)

    stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
    checkError(err)

    defer stdout.Close()

    writer := bufio.NewWriterSize(stdout, 16 * 1024 * 1024)

    strArrCount, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
    checkError(err)

    var strArr []string

    for i := 0; i < int(strArrCount); i++ {
        strArrItem := readLine(reader)
        strArr = append(strArr, strArrItem)
    }

    result := customSorting(strArr)

    for i, resultItem := range result {
        fmt.Fprintf(writer, "%s", resultItem)

        if i != len(result) - 1 {
            fmt.Fprintf(writer, "\n")
        }
    }

    fmt.Fprintf(writer, "\n")

    writer.Flush()
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