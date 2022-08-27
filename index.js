
// Iterates over the collection of elements, passing each element in turn to the callback function.
function myEach(collection, callback) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    for (const element of collectionElements) {
        callback(element)
    }
    return collection
}

// Produces a new collection of values by mapping each value in collection through a transformation function, callback.
function myMap(collection, callback) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let newCollection = []
    for (const element of collectionElements) {
        newCollection.push(callback(element))
    }
    // Returns the new collection without modifying the original.
    return newCollection
}

// Returns the correct reduced value when either passed or not passed an initial value
function myReduce(collection, callback, accumulator) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    // Since starting value for the accumulator is optional
    if (typeof accumulator === "number") {
        for (const element of collectionElements) {
            accumulator = callback(accumulator, element, collectionElements)
        }
    } else {
        accumulator = parseInt(collectionElements.slice(0, 1))
        let newCollection = collectionElements.slice(1)
        for (let element of newCollection) {
            element = parseInt(element)
            accumulator = callback(accumulator, element, collectionElements)
        }
    }
    return accumulator
}

// Returns the value if found and returns undefined if the value is not present
function myFind(collection, predicate) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    for (const element of collectionElements) {
        if (predicate(element)) {
            return element
        }
    }
}

// Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). 
function myFilter(collection, predicate) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let filteredCollection = []
    for (const element of collectionElements) {
        if (predicate(element)) {
            filteredCollection.push(element)
        }
    }
    return filteredCollection
}

// Return the number of values in the collection.
function mySize(collection) {
    // collection could either be an array or object. That's what we first check
    let collectionElements = []
    if (typeof collection === "object") {
        collectionElements = Object.values(collection)
    } else {
        collectionElements = collection
    }
    let counter = 0
    for (const element of collectionElements) {
        counter++
    }
    return counter
}

// Returns the first element of an array. Passing an n will return the first n elements of the listOfElements.
function myFirst(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(0, noOfElementsToReturn)
    } else {
        return listOfElements[0]
    }
}

// Returns the last element of the listOfElements. Passing n will return the last n elements in the list.
function myLast(listOfElements, noOfElementsToReturn) {
    if (typeof noOfElementsToReturn === "number") {
        return listOfElements.slice(-noOfElementsToReturn)
    } else {
        return listOfElements[mySize(listOfElements) - 1]
    }
}

// Retrieve all the names of the object's enumerable properties.
function myKeys(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(key)
    }
    return newArray
};

// Return all of the values of the object's properties.
function myValues(object) {
    let newArray = []
    for (const key in object) {
        newArray.push(object[key])
    }
    return newArray
}