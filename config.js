var config = {};

config.steem = {};

//Global Configuration
config.steem.username = process.env.STEEM_USER || 'ENTER_USERNAME_HERE';
config.steem.password =  process.env.STEEM_PASSWORD || 'ENTER_PASSWORD_HERE';
config.steem.url = 'wss://steemd-int.steemit.com';
config.steem.auth_type = 'owner'; //owner, posting

//delay in milliseconds between each write transaction
config.steem.delay = 200;

//must be from username, goes with demo start.js
config.steem.sample_post = 'creating-first-steemit-bot';

//optional account to start at in alphanumerisymbolical order
//this is not applicable in follow_trending_authors, follow_back, generate_contest_winners bots
//todo - add this config to other applicable bots; create a config.steeem.end that works much the same
config.steem.start = "";

//memos only
config.steem.type =  'followers'; //either following or followers
config.steem.message = 'Hi @username Your earnings: 0.001 SBD https://steemit.com/follow/@money-dreamer/follower-earnings Un/follow to un/subscribe.'; //message to be sent in each memo (@username will be replaced)
config.steem.amount = '0.001 SBD'; //amount of SBD or STEEM to send to each follower/following
config.steem.send_memos_to = null;

//curation only
config.steem.curation_type =  'created'; //created, hot or trending
config.steem.tags =  ['steem','steemit','utopian-io']; //tags. leave empty for all trending tags
config.steem.vote_percent = 1; //percentage of vote for each vote

//generate_contest_winners only
config.steem.contest_permlink = '30-sbd-webgl-screen-capture-contest';//link to post where contest is being held - must be by config.steem.username set above
config.steem.contest_sublink = 'https://experiments.withgoogle.com/chrome/';//a comment entry must contain a URL with this sublink (only if require_link true)
config.steem.require_graphic = true;//a comment entry must contain an image to qualify
config.steem.require_link = true;//a comment entry must contain link with sublink to qualify
config.steem.require_followers = true;//contestents must be following to qualify
config.steem.require_resteem = true;//a comment entry must contain an image to qualify

//follow_back only
config.steem.unfollow_nonfollowers = false; //if a user unfollows this account, then unfollow them

//follow_accounts only
config.steem.follow_accounts_from = 'jerrybanfield';//ned, dan
config.steem.accounts_to_follow = []; //this will be ignored if config.steem.follow_accounts_from is not null
config.steem.follow_accounts_type =  'following'; //either following or followers

//get_reblogs_steemsql only
config.steem.steemsql_username = 'Steemit-money-dreamer';
config.steem.steemsql_password = 'Gmt3tkmY5FBw64Htw9GH';
config.steem.steemsql_server = 'vip.steemsql.com';
config.steem.steemsql_database = 'DBSteem';

//and thats that
module.exports = config;