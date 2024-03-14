class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }
  }

  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      throw new Error(`Error finding document by ID: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      throw new Error(`Error updating document: ${error.message}`);
    }
  }

  async getaAll(id) {
    try {
      const result = await this.model.find({});
      return result;
    } catch (error) {
      throw new Error(`Error updating document: ${error.message}`);
    }
  }

  async destroy(id) {
    try {
      const document = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw new Error(`Error deleting document: ${error.message}`);
    }
  }
}

export default CrudRepository;
