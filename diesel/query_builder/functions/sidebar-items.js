initSidebarItems({"fn":[["delete","Creates a delete statement. Will delete the records in the given set. Because this function has a very generic name, it is not exported by default."],["insert","Creates an insert statement. Will add the given data to a table. This function is not exported by default. As with other commands, the resulting query can return the inserted rows if you choose."],["select","Creates a bare select statement, with no from clause. Primarily used for testing diesel itself, but likely useful for third party crates as well. The given expressions must be selectable from anywhere."],["update","Creates an update statement. Helpers for updating a single row can be generated by `#[changeset_for]`."]]});