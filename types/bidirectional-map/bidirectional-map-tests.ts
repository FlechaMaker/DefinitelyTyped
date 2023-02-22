import BiMap from "bidirectional-map";

const bidirectionalMap = new BiMap({
    one: 1
});
bidirectionalMap.size; // $ExpectType number
bidirectionalMap.set("two", 2);
bidirectionalMap.set("three", 3);
bidirectionalMap.get("one"); // $ExpectType number | undefined
bidirectionalMap.get("not-a-number"); // $ExpectType number | undefined
// @ts-expect-error
bidirectionalMap.get(true);
bidirectionalMap.getKey(1); // $ExpectType string | undefined
bidirectionalMap.getKey(2); // $ExpectType string | undefined
// @ts-expect-error
bidirectionalMap.getKey("one");
bidirectionalMap.delete("two");
bidirectionalMap.deleteValue(3);
bidirectionalMap.entries(); // $ExpectType IterableIterator<[string, number]>
bidirectionalMap.has("one"); // $ExpectType boolean
bidirectionalMap.hasValue(2); // $ExpectType boolean
bidirectionalMap.keys(); // $ExpectType IterableIterator<string>
bidirectionalMap.values(); // $ExpectType IterableIterator<number>
