function getIndexOf<T>(this: T[], predicate: (x: T) => boolean): number {
  let index = 0;
  for (const item of this) {
    if (predicate(item))
      return index;
    index++;
  }
  return -1;
}

function any<T>(this: T[], predicate: (x: T) => boolean): boolean {
  for (const item of this)
    if (predicate(item))
      return true;
  return false;
}

function all<T>(this: T[], predicate: (x: T) => boolean): boolean {
  for (const item of this)
    if (!predicate(item))
      return false;
  return true;
}

function first<T>(this: T[], predicate: (x: T) => boolean): T {
  for (const item of this)
    if (predicate(item))
      return item;
  throw new Error("Array does not contain the specified item");
}

function firstOrDefault<T>(this: T[], predicate: (x: T) => boolean): T | null {
  for (const item of this)
    if (predicate(item))
      return item;
  return null;
}

function max<T>(this: T[], selector: (x: T) => number): number | null {
  let result: number | null = null;
  for (const item of this) {
    const x: number = selector(item);
    if (result === null)
      result = x;
    else if (x > result)
      result = x;
  }

  return result;
}

function min<T>(this: T[], selector: (x: T) => number): number | null {
  let result: number | null = null;
  for (const item of this) {
    const x: number = selector(item);
    if (result === null)
      result = x;
    else if (x < result)
      result = x;
  }
  return result;
}

function where<T>(this: T[], predicate: (x: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of this)
    if (predicate(item))
      result.push(item);
  return result;
}

function select<T, R>(this: T[], selector: (x: T) => R): R[] {
  const result: R[] = [];
  for (const item of this)
    result.push(selector(item));
  return result;
}

function count<T>(this: T[], predicate: (x: T) => boolean): number {
  let result = 0;
  for (const item of this)
    if (predicate(item))
      result++;
  return result;
}

function removeAll<T>(this: T[], predicate: (x: T) => boolean): void {
  const indexes: number[] = [];
  let index = 0;
  for (const item of this) {
    if (predicate(item))
      indexes.push(index);
    index++;
  }

  for (let i = 0; i < indexes.length; i++)
    this.splice(indexes[indexes.length - 1 - i], 1);
}

function orderBy<T>(this: T[], comparer: (x: T, y: T) => number): void {
  this.sort(comparer);
}

function orderByDescending<T>(this: T[], comparer: (x: T, y: T) => number): void {
  this.sort((x, y) => 0 - comparer(x, y));
}

function addRange<T>(this: T[], items: T[]): void {
  for (const item of items)
    this.push(item);
}

function distinct<T>(this: T[], predicate: (x: T, y: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of this)
    if (!result.any(x => predicate(x, item)))
      result.push(item);
  return result;
}

function leftJoin<T, T1>(this: T[], items: T1[], predicate: (x: T1, y: T) => boolean, selector: (x: T) => T1): T1[] {
  const result: T1[] = [];

  for (const item of this)
    if (!items.any(x => predicate(x, item)))
      result.push(selector(item));

  return result;
}

function removeArray<T, T1>(this: T[], removeFromArray: T1[], predicate: (x: T, y: T1) => boolean): void {
  const indexes: number[] = [];
  let index = 0;
  for (const item of this) {
    for (const itemR of removeFromArray)
      if (predicate(item, itemR))
        indexes.push(index);
    index++;
  }

  for (let i = 0; i < indexes.length; i++)
    this.splice(indexes[indexes.length - 1 - i], 1);
}

Array.prototype.getIndexOf = getIndexOf;
Array.prototype.any = any;
Array.prototype.all = all;
Array.prototype.first = first;
Array.prototype.firstOrDefault = firstOrDefault;
Array.prototype.min = min;
Array.prototype.max = max;
Array.prototype.where = where;
Array.prototype.select = select;
Array.prototype.count = count;
Array.prototype.removeAll = removeAll;
Array.prototype.orderBy = orderBy;
Array.prototype.orderByDescending = orderByDescending;
Array.prototype.addRange = addRange;
Array.prototype.distinct = distinct;
Array.prototype.leftJoin = leftJoin;
Array.prototype.removeArray = removeArray;

interface Array<T> {
  getIndexOf<T>(this: T[], predicate: (x: T) => boolean): number;
  any<T>(this: T[], predicate: (x: T) => boolean): boolean;
  all<T>(this: T[], predicate: (x: T) => boolean): boolean;
  first<T>(this: T[], predicate: (x: T) => boolean): T;
  firstOrDefault<T>(this: T[], predicate: (x: T) => boolean): T | null;
  min<T>(this: T[], selector: (x: T) => number): number | null;
  max<T>(this: T[], selector: (x: T) => number): number | null;
  where<T>(this: T[], predicate: (x: T) => boolean): T[];
  select<T, R>(this: T[], selector: (x: T) => R): R[];
  count<T>(this: T[], predicate: (x: T) => boolean): number;
  removeAll<T>(this: T[], predicate: (x: T) => boolean): void;
  orderBy<T>(this: T[], comparer: (x: T, y: T) => number): void;
  orderByDescending<T>(this: T[], comparer: (x: T, y: T) => number): void;
  addRange<T>(this: T[], items: T[]): void;
  distinct<T>(this: T[], predicate: (x: T, y: T) => boolean): T[];
  leftJoin<T, T1>(this: T[], items: T1[], predicate: (x: T1, y: T) => boolean, selector: (x: T) => T1): T1[];
  removeArray<T, T1>(this: T[], removeFromArray: T1[], predicate: (x: T, y: T1) => boolean): void;
}
