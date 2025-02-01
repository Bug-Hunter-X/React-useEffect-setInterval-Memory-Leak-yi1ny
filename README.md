# React useEffect setInterval Memory Leak

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`.  The improper use of `setInterval` within `useEffect` without proper cleanup can lead to memory leaks.

## Bug Description

The `bug.js` file contains a component that uses `setInterval` to update a counter every second. However, the `useEffect` hook's dependency array is empty (`[]`), meaning the cleanup function (`clearInterval`) is never called. This results in multiple intervals running simultaneously, causing a memory leak.

## Solution

The `bugSolution.js` file provides a corrected implementation.  It adds the `count` variable to the dependency array to ensure the `setInterval` is cleared whenever the component unmounts or the `count` changes (though the latter isn't strictly necessary for this simple example). This prevents memory leaks by properly cleaning up after `setInterval`.  This is generally a good practice and helps prevent subtle bugs.