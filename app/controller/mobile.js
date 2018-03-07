module.exports = (app) => {
  class RoutesController extends app.Controller {
    async index() {
      await this.ctx.render('pages/mobile');
    }
  }
  return RoutesController;
};
