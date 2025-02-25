import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ['searchTerm', 'page', 'limit', 'sort'];
    excludeFields.forEach((el) => delete queryObj[el]);
    if (queryObj.minPrice && queryObj.maxPrice) {
        queryObj.price = {
        $gte: Number(queryObj.minPrice),
        $lte: Number(queryObj.maxPrice),
      };
      delete queryObj.minPrice;
      delete queryObj.maxPrice;
    }
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
  limit() {
    this.modelQuery = this.modelQuery.limit(Number(this?.query?.limit));
    return this;
  }

  countTotal() {
    const totalQueries = this.modelQuery.getFilter();
    const totalDocuments = this.modelQuery.model.countDocuments(totalQueries);
    return totalDocuments;
  }
}

export default QueryBuilder;