import { NextResponse } from 'next/server';
import prisma from '@/lib/global_client';
import { subDays } from 'date-fns';

export async function GET() {
    try {
        const users = await prisma.user.findMany();

        const totalUsers = users.length;

        const vendors = users.filter(user => user.type == 'vendor').length;
        const bidders = users.filter(user => user.type == 'bidder').length;
        const newUsers = users.filter(user => new Date(user.createdAt) >= subDays(new Date(), 30)).length;

        const activeUsers = users.filter(user => user.subscriptionType !== null).length;
        const inactiveUsers = totalUsers - activeUsers;

        const basicSubscribers = users.filter(user => user.subscriptionType == 'Basic').length;
        const standardSubscribers = users.filter(user => user.subscriptionType == 'Standard').length;
        const premiumSubscribers = users.filter(user => user.subscriptionType == 'Premium').length;

        const getPercentage = (count) => totalUsers > 0 ? Math.round((count / totalUsers) * 100)  : 0;

        const cards = [
            { name: "Vendors", count: vendors, percent: getPercentage(vendors)},
            { name: "Bidders", count: bidders, percent: getPercentage(bidders)},
            { name: "New Users", count: newUsers, percent: getPercentage(newUsers)},
            { name: "Active Users", count: activeUsers, percent: getPercentage(activeUsers)},
        ];

        const userBar = [
            { name: "Total Users", count: totalUsers, percent: 100},
            { name: "Active Users", count: activeUsers, percent: getPercentage(activeUsers)},
            { name: "Inactive Users", count: inactiveUsers, percent: getPercentage(inactiveUsers)},
            { name: "Basic Subscribers", count: basicSubscribers, percent: getPercentage(basicSubscribers)},
            { name: "Standard Subscribers", count: standardSubscribers, percent: getPercentage(standardSubscribers)},
            { name: "Premium Subscribers", count: premiumSubscribers, percent: getPercentage(premiumSubscribers)},
        ];

        return NextResponse.json({ success: true, data: { cards, userBar, users } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Failed to fetch users: ${error.message}` }, { status: 500 });
    }
}
