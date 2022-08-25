---
title: "How to efficiently manage a small field sales team"
pubDate: "2020-01-02"
slug: "field-team"
description: "Using data and reporting tools to boost sales in a traditionaly oriented
  company."
hero: "/images/anastasia-dulgier-1155233-unsplash.jpg"
tags: ["field","sales", "team"]
layout: "../../layouts/BlogPostLayout.astro"
---

No matter how small your team is, it will generate valuable data. So even if you manage the sales for the first time, you should firstly look for the numbers. You can quickly have answers to drive you and your team toward solid and repeatable results.

### Understanding the context

At one point I was managing a small team of field representatives. **Selling real physical products was** a refresher but also **a massive challenge** as it involved real **people**, genuine **products** and **customers** spread all over the country. Everything was entirely new, plus I didn't have any previous experience on which I could base my self-confidence.

The setup that I had inherited was almost non-existent; abandoned manually updated "MS Access" **CRM** database and a bunch of private notes from the reps with no real transferable value or supporting context. Sales reps did a daily report which with time turned into truly meaningless musings looking almost the same every day. On the level of _"She had a great shirt, next time I should ask where she bought it"_. As much as this can be useful to a good salesman, we were missing a lot of actionable insights.

We had one weekly email report from the wholesalers as the only relevant sales record. **Everyone nervously waited for the Monday morning** to hear the aggregated number of sales for their territory, and that was it. More with fear did they manage to achieve the weekly target, which was arbitrarily set by the CEO. Targets were a problem in itself as they were fixed values and didn't take into account the growth of sales or any other fundamental specificity such as market size. Moreover, they didn't challenge the sales team to push further.

I have invested some time to talk with each of the representatives and understand all the involved parties. Due to the history of doing things the same way, there was inherent resistance dreading potential disruption. Most of them had arranged their days conveniently with just that weekly target in mind. Some of them had lazy mornings, others loved to joyride, but honestly, they hardly worked their 8 hours. At the same time, due to the lack of central real-time data management, everything was kept in the heads of the reps and the company was in a hostage situation to them. **The change couldn't come out of the blue as it would hit us back in the head 100%.**

### Provide value to your team from the start

One of the first ideas was to sift through the existing data and try to automate some parts of the process. This would have a twofold benefit, on one side we would have a **better picture of the sales** over several dimensions (buyers, geographies, products, etc.) and on the flip side, we would **provide our reps with feedback on their efforts**. This was a huge leap and value to the reps, which also confer trust, allowing them to see the results of their work.

### Analysing sales with the help of Google Data Studio

![](/images/gds_picture.png)

Data Studio from Google allows you to sift through **big data** and design pretty reports to inspire smarter business decisions. As is the case with other Google products, it is simple, yet powerful. It shouldn't take much time to orient around and design the first report. Challenge is elsewhere, how to confidently analyse the data and be sure that your interpretation is correct.

> **TIP** Manual labour is honest. Avoid overkill setups. Do it as simple as you can, even if that means manual copy-pasting at first. When it proves itself, and you find valuable patterns in the process, you will easily find a way to automate it later.

The sales numbers came in from the third party (wholesaler) in the form of CSV file (comma separated values), so it was relatively easy to get them into [Google Data Studio](http://datastudio.google.com) with the **Google Sheets acting as a proxy**. One colleague in accounting got a new Monday morning task to copy-paste everything from a wholesaler email in a joint sheet while sipping the first coffee. Out of this massive sheet, I have designed 15 different pages in Data Studio each with several charts, **answering typical questions coming from management, sales reps and the production department**.

### Management uptake is critical

For the first month or two, I have kept this under wraps to be sure that there are no errors that could easily be misused to provide arguments for the "resistance". Once I was convinced that everyone understands each page of the report, I have started introductions top-down. With management uptake secured, it was easier to proceed.

### Finding where the sales team is spending their time

![](/images/repsly_pic.png)

Once we had reports on sales, we were still missing data on the visits and contacts in the field. Two solutions that were simple to use and both ticked many of the marks were [Badger Maps](https://www.badgermapping.com) and [Repsly](https://www.repsly.com/). After some investigation and testing, we selected Repsly. **Repsly made the switch easy with its simplicity and good user experience.** It was intuitive, and our sales reps used it almost instantly with no need for explanations. Having the data at any given moment easily reachable was also happily welcomed by sales. More importantly, it had a useful [API](http://developer.repsly.com/repsly-developers) (Application Programming Interface), which allowed me to export their visits for analysis.

The prototype was hacked in 5 minutes using [Zapier](https://zapier.com/) (an automation tool with integrations in 1500+ apps) as it allowed me to connect Sheets and Repsly with just a few clicks. It was an instant success. **For the first time, we managed to intersect sales with visits and measure the success of each visit.**

![](/images/repsly2_pic.png)

To make things easier, I have explored the Repsly API and wrote a [Google Script](https://www.google.com/script/start/), which was set to pull the data on the visits daily. Numbers were fed, yet again, to our massive sheet and used within the same Data Studio report. An early version of the script is available on [Gitlab](https://gitlab.com/simplemonad/pullRepsly), but use it at your own risk as I sadly don't have enough time to support it. Copy the code to the Google Script and create triggers as it suits you. It is important to note that the API returns the last 50 records so you should create an adequate number of triggers. I have set the triggers to run around midnight when there are no activities. Real-time data wasn't mission-critical in this case, so this worked more than well.

![](/images/gitlab_src_pull.jpg)

### Developing assessments criteria for fast decision making in the field

Field sales representatives work mostly on a mobile device and manage multiple accounts while being the face of a company within a particular territory. For them, **time is critical**, as a limited resource it is tightly connected to the results. Optimising their daily routes choosing which location to visit and when makes a difference.

As it was crucial for reps to have a fast signal I have developed a **Success Appraisal** mark based on a formula calculated for each client on a monthly and quarterly basis. **Success Appraisal** mark is the primary tool and orientation for sales reps as they help them to make quick decisions while in the field and at the same time, be confident in the outcome of the visit. In itself, the Success Appraisal mark held enough information that reps could use during their visits in discussions with buyers. It provided them with a **good idea of the volume in the last period, sales trend** (index of the increase/decrease) and **sales quantile** bucket. This data was fed back into Repsly for reps to have during the visits.

### Conclusion

Real data on sales and visits from the field reps were a **catalyst in our digital transformation**. The immediate effect was that _one sales representative quit_ in the first month. Others were more cooperative and are now using the data to **organise their routes better** and **develop more informed discussion points** with buyers. While **management got several ideas to optimise sales, develop bundles, actions and even develop entirely new products**.

### My 6 general learnings in managing sales

1. relations sell
2. to have fantastic relationships you need **incredible people**
3. communication needs to be **concise** and **honest**
4. never forget **who is the real buyer**
5. value of the offer is relative, and **you can maximise the financial outcome**
6. for a meaningful result, **you need credible data**

![Great visualisation of sales management done by pipedrive.com](/images/sales_managers_live.png?classes=caption "Where great sales managers live, adapted from pipedrive.com")