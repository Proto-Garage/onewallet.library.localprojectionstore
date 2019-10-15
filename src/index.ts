interface ProjectionAttributes {
  id: string;
  lastEvent: string;
}

export default class {
  protected map: { [key: string]: ProjectionAttributes }
  public constructor() {
    this.map = {};
  }
  public async initialize() {
    return;
  }

  public async findById(id: string) {
    return this.map[id];
  }

  public async upsert(params: ProjectionAttributes) {
    this.map[params.id] = params;
  }
}