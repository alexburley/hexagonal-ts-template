import { Type as T } from '@sinclair/typebox'
import { UserTypeSchema } from 'domain/entities/user/user'
import { GetUserByIdQueryFactory } from 'domain/use-cases/queries/get-user-by-id-command'
import { ServiceFastifyInstance } from 'handlers/fastify/server'

export const GetUserRoute = (fastify: ServiceFastifyInstance) => {
  fastify.get(
    '/v1/users/:userId',
    {
      schema: {
        params: T.Object({
          userId: T.String({ format: 'email' }),
        }),
        response: {
          200: {
            result: UserTypeSchema,
          },
        },
      },
    },
    async request => {
      const query = new GetUserByIdQueryFactory().instance(fastify.appCtx)
      const user = await query.execute(request.params.userId)

      return {
        statusCode: 200,
        body: {
          result: user.serialize(),
        },
      }
    },
  )
}
