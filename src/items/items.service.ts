import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.item.findMany({ orderBy: { id: 'desc' } });
  }

  async findOne(id: number) {
    const item = await this.prisma.item.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async create(title: string, description: string) {
    return this.prisma.item.create({ data: { title, description } });
  }

  async update(id: number, title: string, description: string) {
    await this.findOne(id);
    return this.prisma.item.update({
      where: { id },
      data: { title, description },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.item.delete({ where: { id } });
  }
}
