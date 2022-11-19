/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CartService } from "../cart.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CartCreateInput } from "./CartCreateInput";
import { CartWhereInput } from "./CartWhereInput";
import { CartWhereUniqueInput } from "./CartWhereUniqueInput";
import { CartFindManyArgs } from "./CartFindManyArgs";
import { CartUpdateInput } from "./CartUpdateInput";
import { Cart } from "./Cart";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CartControllerBase {
  constructor(
    protected readonly service: CartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cart })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: CartCreateInput): Promise<Cart> {
    return await this.service.create({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Cart] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CartFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Cart[]> {
    const args = plainToClass(CartFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CartWhereUniqueInput,
    @common.Body() data: CartUpdateInput
  ): Promise<Cart | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CartWhereUniqueInput
  ): Promise<Cart | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
