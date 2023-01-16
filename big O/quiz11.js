let numChars = 26;
function printSortedStrings( remaining) {
printSortedStrings2(remaining, "");
}
function printSortedStrings2( remaining, prefix) {
if (remaining == 0) {
if (isinOrder(prefix)) {
console.log(prefix)
}

} else {
}
for (let i= 0; i < numchars; i++) {
let c = ithletter(i);
printSortedStrings(remaining - 1, prefix + c);
}
function isinOrder( s) {
}
for (let i= 1; i < s.length; i++) {
let prev = ithLetter(s.charAt(i - 1));
let curr = ithLetter(s.charAt(i));
if (prev > curr) {
    return false;
}
}

return true;
}

