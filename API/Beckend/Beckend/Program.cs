using Beckend.BAL.BusinessManager;
using Beckend.BAL.Interface;
using Beckend.DAL;
using Beckend.DAL.Entities;
using Beckend.DAL.IRepositories;
using Beckend.DAL.Repositories;
using Beckend.DAL.UOW;
using Microsoft.EntityFrameworkCore;
using Userupdateservice;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IRequestRepository, RequestRepository>();
builder.Services.AddScoped<IRequestBal, RequestBal>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<NapsStp2019Context>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("dbconnection")));

var app = builder.Build();
var configsetting = new ConfigurationBuilder().
    AddJsonFile("appsettings.json").Build();
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .MinimumLevel.Override("microsoft", Serilog.Events.LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.File(builder.Configuration["Logging:Logpath"].ToString())
    .CreateLogger();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
