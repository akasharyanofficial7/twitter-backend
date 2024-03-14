import CrudRepository from "./crud-repository.js";
class TweetRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
