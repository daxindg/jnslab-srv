import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  UseMiddleware,
} from "type-graphql";
import { Catalog } from "../entities/Catalog";
import { canCreate } from "../middleware/canCreate";
import { isLogedin } from "../middleware/isLogedin";
import { CreateCatalogInputs } from "../types/CreateCatalogInputs";
import { CreateCatalogResponse } from "../types/CreateCatalogResponse";
import { verifyCreateCatalogInput } from "../utils/verifyCreateCatalogInput";

@Resolver()
export class CatalogResolver {
  @Query(() => [Catalog])
  catalogs(): Promise<Catalog[]> {
    return Catalog.find();
  }

  @Query(() => Catalog, { nullable: true })
  async catalog(
    @Arg("id", () => Int) id: number,
    @Arg("detail", () => Boolean, { nullable: true }) detail: boolean
  ): Promise<Catalog | undefined> {
    const query = Catalog.createQueryBuilder("catalog").where(
      "catalog.id = :catalogId"
    );

    if (detail) query.leftJoinAndSelect("catalog.journals", "journal");
    return query.setParameters({ catalogId: id }).getOne();
  }

  @Mutation(() => CreateCatalogResponse)
  @UseMiddleware([isLogedin, canCreate])
  async createCatalog(
    @Arg("inputs") inputs: CreateCatalogInputs
  ): Promise<CreateCatalogResponse> {
    const errors = await verifyCreateCatalogInput(inputs);
    if (errors.length > 0) return { errors };
    const catalog = await Catalog.create(inputs).save();
    return { catalog };
  }

  @Mutation(() => Catalog, { nullable: true })
  async updateCatalog(
    @Arg("id", () => Int) id: number,
    @Arg("title", { nullable: true }) title: string,
    @Arg("issn", { nullable: true }) issn: string,
    @Arg("cn", { nullable: true }) cn: string,
    @Arg("period", { nullable: true }) period: string,
    @Arg("pub_place", { nullable: true }) pub_place: string,
    @Arg("origanizer", { nullable: true }) organizer: string,
    @Arg("yfdh", { nullable: true }) yfdh: string
  ) {
    const catalog = await Catalog.findOne(id);
    if (!catalog) {
      return null;
    }
    catalog.title = title || catalog.title;
    catalog.issn = issn || catalog.issn;
    catalog.cn = cn || catalog.cn;
    catalog.period = period || catalog.period;
    catalog.pub_place = pub_place || catalog.pub_place;
    catalog.organizer = organizer || catalog.organizer;
    catalog.yfdh = yfdh || catalog.yfdh;
    await Catalog.save(catalog);
    return catalog;
  }

  @Mutation(() => Boolean)
  async deleteCatalog(@Arg("id") id: number): Promise<Boolean> {
    await Catalog.delete(id);
    return true;
  }
}
