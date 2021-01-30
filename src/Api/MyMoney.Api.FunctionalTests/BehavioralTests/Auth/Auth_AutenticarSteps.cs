using FluentAssertions;
using MyMoney.Api.FunctionalTests.Config;
using MyMoney.Api.WebApi;
using System.Net.Http;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using Xunit;

namespace MyMoney.Api.FunctionalTests.BehavioralTests.Auth
{
    [Binding]
    [Collection(nameof(BehavioralTestsFixtureCollection))]
    public class Auth_AutenticarSteps
    {
        private readonly BehavioralTestsFixture<StartupTests> _testsFixture;
        public HttpResponseMessage Response { get; private set; }

        public Auth_AutenticarSteps(BehavioralTestsFixture<StartupTests> testsFixture)
        {
            _testsFixture = testsFixture;
        }

        [When(@"for realizada a autenticação com um usuário válido")]
        public async Task QuandoForRealizadaAAutenticacaoComUmUsuarioValidoAsync()
        {
            // Arrange&Act&Assert
            Response = await _testsFixture.RealizarAutenticacaoAsync();
        }

        [Then(@"a autenticação ocorrerá com sucesso")]
        public void EntaoAAutenticacaoOcorreraComSucesso()
        {
            // Arrange&Act&Assert
            Response.EnsureSuccessStatusCode();
        }

        [Then(@"serão devolvidas as informações da autenticação")]
        public void EntaoSeraoDevolvidasAsInformacoesDaAutenticacao()
        {
            // Arrange&Act&Assert
            _testsFixture.LoginResponse.Should().NotBeNull();
            _testsFixture.LoginResponse.UserToken.Email.Should().Be(_testsFixture.Email);
        }
    }
}
