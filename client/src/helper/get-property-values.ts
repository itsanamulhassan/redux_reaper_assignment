export function getPropertyValues<T>(
  object: unknown,
  propertyName: string
): T[] {
  const values: T[] = [];
  const visited = new WeakSet<object>();

  const traverse = (node: unknown): unknown => {
    if (node === null || typeof node !== "object") {
      return node;
    }

    if (visited.has(node)) {
      return node;
    }
    visited.add(node);

    if (Array.isArray(node)) {
      return node.map(traverse);
    }

    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(node)) {
      if (key === "ref") {
        continue; // ✅ Remove "ref" properties entirely
      }

      if (
        key === propertyName &&
        typeof value !== "object" &&
        value !== undefined
      ) {
        values.push(value as T);
      }

      result[key] = traverse(value);
    }

    return result;
  };

  traverse(object);

  return values.filter((v) => v !== "");
}
